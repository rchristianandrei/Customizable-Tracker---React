using backend.DTOs.Textbox;
using System.Text.Json.Serialization;

namespace backend.DTOs.TrackerComponent;

[JsonPolymorphic(TypeDiscriminatorPropertyName = "type")]
[JsonDerivedType(typeof(UpdateTextboxDto), "Textbox")]
[JsonDerivedType(typeof(UpdateDropdownDto), "Dropdown")]
public class UpdateBaseDto
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Placeholder { get; set; } = string.Empty;

    public int Width { get; set; }

    public int X { get; set; }

    public int Y { get; set; }
}