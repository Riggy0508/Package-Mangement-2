using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Infosys.PackXpreZ.DataAccessLayer.Models
{
    public partial class PackXprezDBContext : DbContext
    {
        public PackXprezDBContext()
        {
        }

        public PackXprezDBContext(DbContextOptions<PackXprezDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Address> Address { get; set; }
        public virtual DbSet<BranchOfficer> BranchOfficer { get; set; }
        public virtual DbSet<CustomerDetails> CustomerDetails { get; set; }
        public virtual DbSet<DistanceByPincode> DistanceByPincode { get; set; }
        public virtual DbSet<Feedback> Feedback { get; set; }
        public virtual DbSet<PincodeDetails> PincodeDetails { get; set; }
        public virtual DbSet<SchedulePackage> SchedulePackage { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source =(localdb)\\MSSQLLocalDB;Initial Catalog=PackXprezDB;Integrated Security=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Address>(entity =>
            {
                entity.Property(e => e.BuildingNo)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EmailId)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Locality)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Pincode).HasColumnType("numeric(6, 0)");

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.StreetName)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.Email)
                    .WithMany(p => p.Address)
                    .HasForeignKey(d => d.EmailId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_EmailId_Address");
            });

            modelBuilder.Entity<BranchOfficer>(entity =>
            {
                entity.HasKey(e => e.OfficerEmail);

                entity.Property(e => e.OfficerEmail)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.BranchName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.OfficerName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Pincode).HasColumnType("numeric(6, 0)");
            });

            modelBuilder.Entity<CustomerDetails>(entity =>
            {
                entity.HasKey(e => e.EmailId);

                entity.Property(e => e.EmailId)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.ContactNo)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<DistanceByPincode>(entity =>
            {
                entity.HasKey(e => e.DistanceId);

                entity.Property(e => e.Pincode1).HasColumnType("numeric(6, 0)");

                entity.Property(e => e.Pincode2).HasColumnType("numeric(6, 0)");
            });

            modelBuilder.Entity<Feedback>(entity =>
            {
                entity.Property(e => e.ActionTaken)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EmailId)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.FeedBackText)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FeedBackType)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.Email)
                    .WithMany(p => p.Feedback)
                    .HasForeignKey(d => d.EmailId)
                    .HasConstraintName("fk_EmailId_Feedback");
            });

            modelBuilder.Entity<PincodeDetails>(entity =>
            {
                entity.HasKey(e => e.Pincode);

                entity.Property(e => e.Pincode).HasColumnType("numeric(6, 0)");

                entity.Property(e => e.Location)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SchedulePackage>(entity =>
            {
                entity.HasKey(e => e.TransactionId);

                entity.Property(e => e.Awbnumber)
                    .HasColumnName("AWBNumber")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DeliveredDate).HasColumnType("date");

                entity.Property(e => e.DeliveryMode)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.DeliveryStatus)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EmailId)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.ReceiverAddr)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ScheduledDate)
                    .HasColumnType("date")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.SenderAddr)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Email)
                    .WithMany(p => p.SchedulePackage)
                    .HasForeignKey(d => d.EmailId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_EmailId_SchedulePackage");
            });
        }
    }
}
