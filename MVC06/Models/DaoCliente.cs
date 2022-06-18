using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC06.Models
{
    public class DaoCliente
    {
        public void clientesIns(clientes cliente)
        {
            using(var db=new ModelClientes())
            {
                db.clientes.Add(cliente);
                db.SaveChanges();
            }
        }

        public void clientesDel(int idcliente)
        {
            using (var db = new ModelClientes())
            {
                var cliente = db.clientes.Find(idcliente);
                db.clientes.Remove(cliente);
                db.SaveChanges();
            }
        }

        public void clientesUpd(clientes cliente)
        {
            using (var db = new ModelClientes())
            {
                var c = db.clientes.Find(cliente.idcliente);
                c.apellidos = cliente.apellidos;
                c.nombres = cliente.nombres;
                db.SaveChanges();
            }
        }
    }
}