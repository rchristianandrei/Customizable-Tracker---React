using backend.Data;
using backend.DTOs.TrackerComponent;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TextboxController(AppDbContext context) : ControllerBase
{
    private readonly AppDbContext context = context;

    [HttpGet("{trackerId}")]
    public async Task<IActionResult> GetAllByTrackerId(int trackerId)
    {
        var textboxes = await this.context.TrackerComponents
            .OfType<TextboxComponent>()
            .Where(t => t.TrackerId == trackerId)
            .ToListAsync();

        return Ok(textboxes);
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CreateTextboxDto value)
    {
        var tracker = await this.context.Trackers.FindAsync(value.TrackerId);
        if (tracker == null) return NotFound("Tracker not found");

        BaseComponent textbox = new TextboxComponent()
        {
            Name = "Textbox",
            DateTimeCreated = DateTime.Now,
            TrackerId = value.TrackerId,
        };

        await this.context.TrackerComponents.AddAsync(textbox);
        await this.context.SaveChangesAsync();

        return Ok();
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }
}
