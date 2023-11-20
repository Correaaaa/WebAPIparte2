using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Locadora.Models;
using Locadora.Data;

namespace Locadora.Controllers
{
    [ApiController]
    [Route("api/clientes")]
    public class ClientesController : ControllerBase
    {
        private readonly LocadoraDbContext _context;

        public ClientesController(LocadoraDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Cliente>>> GetClientes()
        {
            return await _context.Clientes.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{id}")]
        public async Task<ActionResult<Cliente>> GetCliente(int id)
        {
            var cliente = await _context.Clientes.FindAsync(id);

            if (cliente == null)
            {
                return NotFound();
            }

            return cliente;
        }

        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult<Cliente>> PostCliente(Cliente cliente)
        {
            _context.Clientes.Add(cliente);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCliente", new { id = cliente.Id }, cliente);
        }

        [HttpPut]
        [Route("alterar/{id}")]
        public async Task<IActionResult> PutCliente(int id, [FromBody] Cliente novoCliente)
        {
            var cliente = await _context.Clientes.FindAsync(id);

            if (cliente == null)
            {
                return NotFound();
            }

            cliente.Nome = novoCliente.Nome;
            cliente.Email = novoCliente.Email;
            cliente.Idade = novoCliente.Idade;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete]
        [Route("deletar/{id}")]
        public async Task<IActionResult> DeleteCliente(int id)
        {
            var cliente = await _context.Clientes.FindAsync(id);
            if (cliente == null)
            {
                return NotFound();
            }

            _context.Clientes.Remove(cliente);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClienteExists(int id)
        {
            return _context.Clientes.Any(e => e.Id == id);
        }
    }
}
