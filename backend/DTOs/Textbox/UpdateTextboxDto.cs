using backend.DTOs.TrackerComponent;

namespace backend.DTOs.Textbox;

public class UpdateTextboxDto : UpdateBaseDto
{
    public int MaxLength { get; set; }
}
