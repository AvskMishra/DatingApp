using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {


        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddControllers();
            services.AddScoped<ITokenService, TokenServices>();
            //services.AddDbContext<DataContext>(options =>
            //{  
            //    options.UseSqlite(_config.GetConnectionString("DefaultConnection"));
            //});

            ///connection string  should be in mentioned format ""ConnectionStrings""  text should be proper
               /* "ConnectionStrings": {
                    "DefaultConnection": "Data source=datingapp.db"
                    },
               */
            services.AddDbContext<DataContext>(options => options.UseSqlite(config.GetConnectionString("DefaultConnection")));
            return services;
        }
    }
}
