using backend.Data;
using backend.Interfaces;
using backend.Models;

namespace backend.Repositories;

public class DropdownRepo(AppDbContext context) : BaseComponentRepo<DropdownComponent>(context), IDropdownRepo
{
}
