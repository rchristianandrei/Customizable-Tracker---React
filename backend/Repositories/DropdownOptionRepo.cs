using backend.Data;
using backend.Interfaces;
using backend.Models;

namespace backend.Repositories;

public class DropdownOptionRepo(AppDbContext context) : BaseRepo<DropdownOption>(context), IDropdownOptionRepo
{
}
