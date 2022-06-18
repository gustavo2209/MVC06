using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace MVC06
{
    public partial class ModelClientes : DbContext
    {
        public ModelClientes()
            : base("name=ModelClientes")
        {
        }

        public virtual DbSet<clientes> clientes { get; set; }
        public virtual DbSet<correos> correos { get; set; }
        public virtual DbSet<telefonos> telefonos { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<clientes>()
                .Property(e => e.apellidos)
                .IsUnicode(false);

            modelBuilder.Entity<clientes>()
                .Property(e => e.nombres)
                .IsUnicode(false);

            modelBuilder.Entity<correos>()
                .Property(e => e.correo)
                .IsUnicode(false);

            modelBuilder.Entity<telefonos>()
                .Property(e => e.telefono)
                .IsUnicode(false);
        }
    }
}
