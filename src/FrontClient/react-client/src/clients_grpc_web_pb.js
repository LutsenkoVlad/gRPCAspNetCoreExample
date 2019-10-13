/**
 * @fileoverview gRPC-Web generated client stub for Clients
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */


const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.Clients = require('./clients_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Clients.ClientsGrpcClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Clients.ClientsGrpcPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Clients.CreateClientRequest,
 *   !proto.Clients.CreateClientReply>}
 */
const methodInfo_ClientsGrpc_CreateClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Clients.CreateClientReply,
  /** @param {!proto.Clients.CreateClientRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Clients.CreateClientReply.deserializeBinary
);


/**
 * @param {!proto.Clients.CreateClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Clients.CreateClientReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Clients.CreateClientReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Clients.ClientsGrpcClient.prototype.createClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Clients.ClientsGrpc/CreateClient',
      request,
      metadata || {},
      methodInfo_ClientsGrpc_CreateClient,
      callback);
};


/**
 * @param {!proto.Clients.CreateClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Clients.CreateClientReply>}
 *     A native promise that resolves to the response
 */
proto.Clients.ClientsGrpcPromiseClient.prototype.createClient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Clients.ClientsGrpc/CreateClient',
      request,
      metadata || {},
      methodInfo_ClientsGrpc_CreateClient);
};


module.exports = proto.Clients;

