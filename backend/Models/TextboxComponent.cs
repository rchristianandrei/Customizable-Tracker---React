using backend.Enums;

namespace backend.Models;

public class TextboxComponent : BaseComponent
{
    public override TrackerComponentEnums Type => TrackerComponentEnums.Textbox;

    public int MaxLength { get; set; } = 20;
}
