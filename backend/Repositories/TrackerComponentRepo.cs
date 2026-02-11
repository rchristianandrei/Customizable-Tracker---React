using backend.Data;
using backend.Interfaces;
using backend.Models;

namespace backend.Repositories;

public class TrackerComponentRepo(AppDbContext context, ITextboxRepo textboxRepo, IDropdownRepo dropdownRepo) : BaseRepo<BaseComponent>(context), ITrackerComponentRepo
{
    private readonly ITextboxRepo textboxRepo = textboxRepo;
    private readonly IDropdownRepo dropdownRepo = dropdownRepo;
}
