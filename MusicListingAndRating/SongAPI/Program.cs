using SongAPI.Data;
using SongAPI.Services;
using SongAPI.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddScoped<ISongRepository, SongService>();
builder.Services.AddDbContext<DbContextClass>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAuthentication("Bearer")

  .AddJwtBearer("Bearer", options =>

  {

      options.Authority = "https://localhost:7276/api/Authenticate"; // URL of your Authorization Microservice

      options.Audience = "SongAPI"; // Identify your Song Microservice

  });
var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
//app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();