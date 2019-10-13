using Grpc.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Clients.Services
{
    public class ClientsService : ClientsGrpc.ClientsGrpcBase
    {
        public override Task<CreateClientReply> CreateClient(CreateClientRequest request, ServerCallContext context)
        {
            return Task.FromResult(new CreateClientReply
            {
                Status = $"{request.Name} was successfully cretead"
            });
        }
    }
}
