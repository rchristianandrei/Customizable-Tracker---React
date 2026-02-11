using backend.DTOs.DropdownOption;
using backend.Models;

namespace backend.Mapper;

public static class DropdownOptionMapper
{
    public static DropdownOptionDto ToDto(this DropdownOption option)
    {
        return new DropdownOptionDto
        {
            Id = option.Id,
            Value = option.Value,
        };
    }
}
