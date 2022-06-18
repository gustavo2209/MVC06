namespace MVC06
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class correos
    {
        [Key]
        public int idcorreo { get; set; }

        public int idcliente { get; set; }

        [Required]
        [StringLength(100)]
        public string correo { get; set; }

        public virtual clientes clientes { get; set; }
    }
}
