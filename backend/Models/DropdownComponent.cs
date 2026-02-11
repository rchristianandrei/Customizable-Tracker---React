using backend.Enums;

namespace backend.Models;

public class DropdownComponent : BaseComponent
{
    public override TrackerComponentEnums Type => TrackerComponentEnums.Dropdown;

    public ICollection<DropdownOption> Options { get; set; } = [];
}
