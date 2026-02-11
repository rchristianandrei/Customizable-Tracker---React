using backend.DTOs.DropdownOption;

namespace backend.DTOs;

public class DropdownDto : BaseComponentDto
{
    public ICollection<DropdownOptionDto> Options { get; set; } = [];

}
