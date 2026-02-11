using backend.Data;
using backend.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories;

public class DropdownRepo(AppDbContext context) : BaseComponentRepo<DropdownComponent>(context), IDropdownRepo
{
    public override async Task<List<DropdownComponent>> GetAllByTrackerId(int trackerId)
    {
        return await this.collection.Where(c => c.TrackerId == trackerId).Include(d => d.Options).ToListAsync();
    }
}
