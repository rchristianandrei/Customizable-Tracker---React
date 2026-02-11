using System.ComponentModel.DataAnnotations;

namespace backend.DTOs.DropdownOption;

public class DropdownOptionDto
{
    [Required]
    public int Id { get; set; }

    [Required]
    public string Label { get; set; } = string.Empty;

    [Required]
    public string Value { get; set; } = string.Empty;
}
