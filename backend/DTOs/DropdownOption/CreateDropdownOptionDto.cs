using System.ComponentModel.DataAnnotations;

namespace backend.DTOs.DropdownOption;

public class CreateDropdownOptionDto
{
    [Required]
    public int DropdownId { get; set; }

    [Required]
    public string Value { get; set; } = string.Empty;
}
