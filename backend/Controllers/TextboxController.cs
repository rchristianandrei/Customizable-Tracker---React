using backend.DTOs.TrackerComponent;
using backend.Interfaces;
using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TextboxController(ITrackerRepo trackerRepo, TextboxRepo textboxRepo) : ControllerBase
{
    private readonly ITrackerRepo trackerRepo = trackerRepo;
    private readonly TextboxRepo textboxRepo = textboxRepo;

    [HttpGet("{trackerId}")]
    public IActionResult GetAllByTrackerId(int trackerId)
    {
        return Ok(this.textboxRepo.GetAllByTrackerId(trackerId));
    }

    [HttpPost]
    public IActionResult Post([FromBody] CreateTextboxDto value)
    {
        var tracker = this.trackerRepo.GetById(value.TrackerId);
        if (tracker == null) return NotFound("Tracker not found");

        var textbox = new TextboxComponent()
        {
            Name = "Textbox",
            DateTimeCreated = DateTime.Now,
            TrackerId = value.TrackerId,
            MaxLength = 20
        };

        this.textboxRepo.Create(textbox);

        return Ok(textbox);
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }
}
