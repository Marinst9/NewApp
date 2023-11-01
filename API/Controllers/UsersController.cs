using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using API.App;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using API.Controllers;


namespace API.App
{
  [Authorize(Policy = "ПубличенПристап")]
  [ApiController]
  // Apply [Authorize] to the whole controller
  public class UsersController : BaseApiController
  {
    private DataContext _dataContext;

    public UsersController(DataContext dataContext)
    {
      _dataContext = dataContext;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
      var users = await _dataContext.Users.ToListAsync();
      return Ok(users);
    }

    

    [HttpGet("{id}")]
    public async Task<ActionResult<AppUser>> GetUser(int id)
    {
      var user = await _dataContext.Users.FindAsync(id);
      if (user == null)
      {
        return NotFound("User not found");
      }
      return Ok(user);
    }

  }
}
