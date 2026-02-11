using backend.Data;
using backend.Interfaces;
using backend.Models;

namespace backend.Repositories;

public class TextboxRepo(AppDbContext context) : BaseComponentRepo<TextboxComponent>(context), ITextboxRepo
{
}
