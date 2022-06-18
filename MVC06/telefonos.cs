namespace MVC06
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class telefonos
    {
        [Key]
        public int idtelefono { get; set; }

        public int idcliente { get; set; }

        [Required]
        [StringLength(100)]
        public string telefono { get; set; }

        public virtual clientes clientes { get; set; }
    }
}
