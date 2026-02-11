using backend.DTOs.TrackerComponent;
using backend.Interfaces;
using backend.Mapper;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class DropdownController(ITrackerRepo trackerRepo, IDropdownRepo dropdownRepo) : ControllerBase
{
    private readonly ITrackerRepo trackerRepo = trackerRepo;
    private readonly IDropdownRepo dropdownRepo = dropdownRepo;

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CreateDropdownboxDto value)
    {
        var tracker = await this.trackerRepo.GetById(value.TrackerId);
        if (tracker == null) return NotFound("Tracker not found");

        var dropdown = new DropdownComponent
        {
            Name = "Dropdownbox",
            Placeholder = "Placeholder",
            TrackerId = value.TrackerId,
            DateTimeCreated = DateTime.Now,
        };

        await this.dropdownRepo.Create(dropdown);

        return Ok(dropdown.ToDto());
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

}
