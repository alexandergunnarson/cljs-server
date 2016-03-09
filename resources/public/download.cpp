#include <sys/types.h>
#include <sys/socket.h>
#include <dirent.h>
#include <netinet/in.h>
#include <netdb.h>
#include <unistd.h>
#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <unistd.h>
#include <iostream>

#include "./Library/io.h"
#include "./Library/collections.h"
using namespace coll;
#include "./Library/print.h"
using namespace pr;
#include "./Library/string.h"
using strn::squote;
#include "./Library/error.h"
#include "./Library/log.h"
#include "./Library/io.h"
#include "./Library/convert.h"

// ----- TODO ----- //

// Check all system calls for errors
// Able to tolerate errors in the command line or (especially) servers that don't respond.
// Your web client should allocate the number of bytes specified in content_length with malloc and use that to read the body of HTTP message.

// ----- BEGIN DEFINITIONS ----- //

#define SOCKET_ERROR   -1
#define BUFFER_SIZE    100
#define HOST_NAME_SIZE 255
#define MAXMSG         1024

// Define global debug variables
namespace logn    { 
  bool LOG         = true;
  bool DEBUG       = true;
  bool DEBUG_5     = false;
  // Annoying messages
  bool PR_BASIC    = false;
  bool THROW_DEBUG = false;
  NNum DEBUG_COL_WIDTH = 42;

  hcont::SetX_<std::shared_ptr<std::vector<char>>> global_log_levels =
    emptyT(hcont::SetX_<std::shared_ptr<std::vector<char>>>);
}
namespace globals {
  // Strangely, using aliases (or auto) for externs in Linux doesn't actually work... ugh...
  hcont::SetX_<std::shared_ptr<const hcont::HashedConstString>> global_keywords =
    emptyT(hcont::SetX_<std::shared_ptr<const hcont::HashedConstString>>);
  hcont::SetX_<std::shared_ptr<const hcont::HashedCString    >> global_hstrings =
    emptyT(hcont::SetX_<std::shared_ptr<const hcont::HashedCString    >>);
  // defi(SetX_<Keyword>, global_keywords);
  // defi(SetX_<HString>, global_hstrings);
}

using logn::LOG;

String createHTTP(Keyword reqType, String host, int port, String nonHost, double httpVersion) {
  return str(  "GET /", nonHost, " HTTP/", httpVersion
             , "\nHost:", host, ":", port, "\r\n\r\n");
}

void* do_stuff(void* threadid) {
  long tid;
  tid = (long)threadid;
  printf("Hello World! It's me, thread #%ld!\n", tid);
  pthread_exit(NULL);
}

int main(int arg_ct, CString args_0[]) {
  // ----- LOGGING ----- //
  logn::enableX("user");

  auto enableDebug = [&]() {
    logn::enableX("debug");
    logn::enableX("warn");
  };

  // ----- ARGS ----- //
  defi(VecX_<VString>, args);
  defi(VecX_<VString>, args_f);

  for (int i = 0; i < arg_ct; ++ i) {
    conjX(args, vstr(args_0[i]));
  }

  // ----- TESTS ----- //

  bool TEST = true;
  int TEST_NUM = 2;

  if (TEST) {
    auto testArgs = vecX(  tupleX(  vecX("download", "80"  , "/resources/foo.html")
                                  , false)
                         , tupleX(  vecX("download", "80"  , "./resources/test.html")
                                  , true)
                         , tupleX(  vecX("download", "80"  , "./resources/test.gif")
                                  , true)
                         , tupleX(  vecX("download", "80"  , "./resources/test.jpg")
                                  , true));
    args_f = tget(get(testArgs, TEST_NUM), 0);

    enableDebug();
  }

  // ----- LOCALS -----

  args_f = (TEST) ? args_f : args;

  bool     httpDebug   = false;
  int      repCt       = 1;
  int      hSocket;              // handle to socket
  struct   hostent* pHostInfo;   // holds info about a machine
  struct   sockaddr_in Address;  // Internet socket address struct
  long     nHostAddress;
  char     pBuffer[BUFFER_SIZE];
  unsigned nReadAmount;
  VString  hostName  = nil;
  int      nHostPort = -1;
  VString  uri       = nil;

  // ----- PARSE COMMAND LINE ARGS ----- //
  // getopt would have been nice... oh well
  if (count(args_f) != 3) {
    println("Usage: 'server <host-port> <URI>'");
    return 0;
  } else {
    try {
      nHostPort = conv::toInt(get(args_f, 1));
      uri = get(args_f, 2);
    } catch (ERR::invalid_argument_ e) {
      println("Port is not valid:", squote(get(args_f, 1)));
      throw e;
    }
  }

  // TODO check for malformed URI

  // ======== STAT STUFF ========

  struct stat filestat_f;

  VString ext = taker_until(uri, '.');
  VString content_type;

  println("Before ext_map");

  // TODO fix the casting later
  auto ext_map = assocX(
                 assocX(
                 assocX(
                 assocX(
                  umapX(  vstr("txt")
                        , vstr("text/plain"))
                        , vstr("html")
                        , vstr("text/html"))
                        , vstr("jpg")
                        , vstr("image/jpg"))
                        , vstr("gif")
                        , vstr("image/gif")));

  bool statErrorQ = io::initStat(str(uri).c_str(), &filestat_f);
  if(statErrorQ) {
    println("ERROR in stat.", squote(uri), "might not exist");
    return 0;
  } else if (io::fileQ(&filestat_f)) {
    println(uri, "is a regular file");
    //println("file size =", filestat.st_size);
    //println("file size =", filestat.st_size);
    println("File size in bytes =", str(filestat_f.st_size)); // This is in bytes

    content_type = get(ext_map, vstr(ext));
    println("Content-Type is", content_type);

    // TODO could do this in map but time...
    if (   eq(content_type, vstr("text/plain"))
        || eq(content_type, vstr("text/html" ))) {
      log("debug", "Determined was string");
      println(io::open_str(uri));
    } else if (   eq(content_type, vstr("image/jpg"))
               || eq(content_type, vstr("image/gif"))) {
      log("debug", "Determined was bytes");
      io::getBytes(uri);
      println("Done");
    } else {
      println ("Unhandled extension:", ext);
      exit(0);
    }

    //if (eq(ext, "html")) {
//
    //} else if (eq(ext, "txt")) {
    //  content_type = vstr("text/plain");
    //} else if (eq(ext, "html")) {
    //  content_type = vstr("text/html");
    //} else {
    //  println("Unhandled extension:", ext);
    //  exit(0);
    //}

    
    println(io::open_str(uri));

    
    // println("OKAY");
    // FILE* fp = fopen(str(uri).c_str(), "r");
    // char* buffer = (char*)malloc(filestat_f.st_size);
    // fread(buffer, filestat_f.st_size, 1, fp);
    // print("File:\n", str(buffer));
    // free(buffer);
    // fclose(fp);

    return 1;
  } else if (io::directoryQ(&filestat_f)) {
    println(uri, "is a directory:");
    DIR* dirp;
    struct dirent* dp;

    dirp = opendir(str(uri).c_str());
     while ((dp = readdir(dirp)) != NULL) {
       println("---->", str(dp->d_name));
    }

    (void)closedir(dirp);

    return 1;
  } else {
    return 0;
  }

  // ======== SOCKET STUFF ========

  // Setup socket

  int fd = socket(AF_INET, SOCK_STREAM, 0);
  if (fd == SOCKET_ERROR) {
    println("Socket error.");
    return 0;
  }

  // Setup socket address

  struct sockaddr_in serv_addr;
  serv_addr.sin_family      = AF_INET;
  serv_addr.sin_addr.s_addr = INADDR_ANY;

  // Bind

  int sock_len    = sizeof(sockaddr_in);
  int bind_return = bind(fd, (sockaddr*) &serv_addr, (socklen_t)sizeof(serv_addr));

  // Listen

  int listen_return = listen(fd, 1000);

  // Accept a connection

  // Make smpty sockaddr to fill in when conn is made
  struct sockaddr_in cli_addr;
  //int accept_return = accept(fd, (sockaddr*)&cli_addr, (socklen_t*)&sock_len); // Blocking


  // ======== THREAD STUFF ========

  int num_threads = 5;

  // Thread pool
  pthread_t threads[num_threads];
  int rc;
  long t;
  for (t=0; t < num_threads; t++) {
    println("In main: creating thread", t);
    rc = pthread_create(&threads[t], NULL, do_stuff, (void *)t);
    if (rc){
       println("ERROR; return code from pthread_create()", rc);
       exit(-1);
    }
  }

  /* Last thing that main() should do */
  pthread_exit(NULL);
  return 1;

  
  return 1;

}