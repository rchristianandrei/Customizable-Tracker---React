namespace backend.Models;

public class DropdownOption
{
    public int Id { get; set; }

    public int DropdownComponentId { get; set; }
    public DropdownComponent DropdownComponent { get; set; } = null!;

    public string Label { get; set; } = string.Empty;

    public string Value { get; set; } = string.Empty;

    public int OrderIndex { get; set; }
}
