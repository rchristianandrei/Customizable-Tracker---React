using backend.DTOs;
using backend.Models;

namespace backend.Mapper;

public static class DropdownDtoMapper
{
    public static DropdownDto ToDto(this DropdownComponent dropdown)
    {
        return new DropdownDto
        {
            Id = dropdown.Id,
            Name = dropdown.Name,
            Placeholder = dropdown.Placeholder,
            Width = dropdown.Width,
            X = dropdown.X,
            Y = dropdown.Y,
            Options = [.. dropdown.Options.Select(o => o.ToDto())],
        };
    }
}
