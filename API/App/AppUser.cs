
namespace API.App
    
{
    public class AppUser
    {
        public string UserName { get; set; } = string.Empty;
        public int Id { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[]PasswordSalt { get; set; }
       
    }

    //dotnet ef migrations add UpdatePasswordFields
    //dotnet ef database update



}
