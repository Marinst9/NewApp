using System.ComponentModel.DataAnnotations;
namespace API.DTOs
{
    public class RegisterDto
    {
        [Required(ErrorMessage = "Корисничкото име е задолжително.")]
        public string UserName { set; get; }
        [Required(ErrorMessage = "Лозинката е задолжителна.")]
        public string Password { set; get; }
    }
}
