using backend.Enums;

namespace backend.Models;

public class TextboxComponent : TrackerBaseComponent
{
    public override string Type => TrackerComponentEnums.Textbox.ToString();
}
