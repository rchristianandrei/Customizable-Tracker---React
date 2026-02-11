using backend.Data;
using backend.DTOs;
using backend.DTOs.Textbox;
using backend.DTOs.Tracker;
using backend.DTOs.TrackerComponent;
using backend.Enums;
using backend.Interfaces;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TrackerController(AppDbContext context) : ControllerBase
{
    private readonly AppDbContext context = context;

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var trackers = await this.context.Trackers.ToListAsync();
        return Ok(trackers);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var tracker = await this.context.Trackers.FindAsync(id);

        if (tracker == null) return NotFound();

        var textboxes = await this.context.TextboxComponents.ToListAsync();

        var components = new List<BaseComponentDto>();

        components.AddRange([.. textboxes.Select(t => new TextboxDto{Id = t.Id, Name = t.Name, MaxLength = t.MaxLength})]);

        var dto = new TrackerDto
        {
            Id = tracker.Id,
            Name = tracker.Name,
            DateTimeCreated = tracker.DateTimeCreated,
            Components = components
        };

        return Ok(dto);
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CreateTrackerDto value)
    {
        var tracker = new Tracker()
        {
            Name = value.Name,
            DateTimeCreated = DateTime.Now,
        };

        await this.context.Trackers.AddAsync(tracker);
        await this.context.SaveChangesAsync();

        return Ok(tracker);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, [FromBody] UpdateTrackerDto value)
    {
        var tracker = await this.context.Trackers.FindAsync(id);
        if (tracker == null) return NotFound();

        tracker.Name = value.Name;

        await this.context.SaveChangesAsync();

        return Ok(tracker);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var tracker = await this.context.Trackers.FindAsync(id);

        if (tracker == null) return NotFound();

        this.context.Trackers.Remove(tracker);
        await this.context.SaveChangesAsync();

        return NoContent();
    }
}
