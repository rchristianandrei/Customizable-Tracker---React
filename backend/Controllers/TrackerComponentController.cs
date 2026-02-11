using backend.Data;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TrackerComponentController(AppDbContext context) : ControllerBase
{
    private readonly AppDbContext context = context;

    //[HttpPost("dropdownbox")]
    //public IActionResult PostDropdownbox([FromBody] CreateDropdownboxDto value)
    //{
    //    var tracker = this.trackerRepo.GetById(value.TrackerId);
    //    if (tracker == null) return NotFound("Tracker not found");

    //    var dropdownbox = new DropdownboxComponent()
    //    {
    //        Name = "Dropdownbox",
    //        DateTimeCreated = DateTime.Now,
    //        TrackerId = value.TrackerId,
    //    };

    //    trackerComponentRepo.Create(dropdownbox);

    //    return Ok(dropdownbox);
    //}

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var component = await this.context.TrackerComponents.FindAsync(id);

        if (component == null) return NotFound();

        this.context.Remove(component);
        await this.context.SaveChangesAsync();

        return NoContent();
    }
}
