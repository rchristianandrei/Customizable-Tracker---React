using backend.DTOs.Textbox;
using System.Text.Json.Serialization;

namespace backend.DTOs;

[JsonPolymorphic(TypeDiscriminatorPropertyName = "type")]
[JsonDerivedType(typeof(TextboxDto), "Textbox")]
[JsonDerivedType(typeof(DropdownDto), "Dropdown")]
public class BaseComponentDto
{
    public int Id { get; set; }
}
