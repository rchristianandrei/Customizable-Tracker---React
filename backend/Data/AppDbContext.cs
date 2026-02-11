using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class AppDbContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Tracker> Trackers => Set<Tracker>();

    public DbSet<BaseComponent> TrackerComponents => Set<BaseComponent>();

    public DbSet<TextboxComponent> TextboxComponents => Set<TextboxComponent>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Tracker
        modelBuilder.Entity<Tracker>()
            .HasMany(t => t.Components)
            .WithOne(c => c.Tracker)
            .HasForeignKey(c => c.TrackerId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<BaseComponent>().UseTptMappingStrategy();
    }
}
