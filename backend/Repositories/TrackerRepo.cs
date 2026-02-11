using backend.Data;
using backend.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories;

public class TrackerRepo(AppDbContext context) : BaseRepo<Tracker>(context), ITrackerRepo
{
    public async Task<Tracker?> GetByIdIncludeAll(int id)
    {
        var tracker = await this.collection.Include(t => t.Components).FirstOrDefaultAsync(t => t.Id == id);
        return tracker;
    }
}
