using backend.DTOs.DropdownOption;
using backend.Interfaces;
using backend.Mapper;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class DropdownOptionController(IDropdownOptionRepo optionRepo) : ControllerBase
{
    private readonly IDropdownOptionRepo optionRepo = optionRepo;

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CreateDropdownOptionDto value)
    {
        var option = new DropdownOption
        {
            DropdownComponentId = value.DropdownId,
            Value = value.Value,
            DateTimeCreated = DateTime.Now,
        };

        await this.optionRepo.Create(option);

        return Ok(option.ToDto());
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var option = await this.optionRepo.GetById(id);
        if (option == null) return NotFound();

        await this.optionRepo.Delete(option);

        return NoContent();
    }
}
