using Clients;
using Grpc.Net.Client;
using System;
using System.Net.Http;

namespace ConsoleGrpcClient
{
    class Program
    {
        static void Main(string[] args)
        {
            var serverUrl = "https://localhost:5001";
            var handler = new HttpClientHandler();

            handler.ServerCertificateCustomValidationCallback = (message, cert, chain, errors) => true;

            var httpClient = new HttpClient(handler);

            var channel = GrpcChannel.ForAddress(serverUrl, new GrpcChannelOptions { HttpClient = httpClient });
            var clientsService = new ClientsGrpc.ClientsGrpcClient(channel);

            var reply = clientsService.CreateClient(new CreateClientRequest { Name = "Vlad Lutsenko" });

            Console.WriteLine(reply.Status);
            Console.ReadLine();
        }
    }
}
