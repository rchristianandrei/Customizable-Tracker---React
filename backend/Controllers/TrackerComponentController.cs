using backend.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TrackerComponentController(ITrackerComponentRepo compRepo) : ControllerBase
{
    private readonly ITrackerComponentRepo compRepo = compRepo;

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var component = await this.compRepo.GetById(id);

        if (component == null) return NotFound();

        await this.compRepo.Delete(component);

        return NoContent();
    }
}
