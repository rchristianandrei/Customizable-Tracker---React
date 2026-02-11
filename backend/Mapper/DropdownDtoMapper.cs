using backend.DTOs;
using backend.Models;

namespace backend.Mapper;

public static class DropdownDtoMapper
{
    public static DropdownDto ToDto(this DropdownComponent textbox)
    {
        return new DropdownDto
        {
            Id = textbox.Id,
            Name = textbox.Name,
            Placeholder = textbox.Placeholder,
            Width = textbox.Width,
            X = textbox.X,
            Y = textbox.Y
        };
    }
}
