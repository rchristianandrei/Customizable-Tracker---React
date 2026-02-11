using backend.Data;
using backend.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories;

public abstract class BaseComponentRepo<T>(AppDbContext context) : BaseRepo<T>(context), IBaseComponentRepo<T> where T : BaseComponent
{
    public virtual async Task<List<T>> GetAllByTrackerId(int trackerId)
    {
        return await this.collection.Where(c => c.TrackerId == trackerId).ToListAsync();
    }
}
