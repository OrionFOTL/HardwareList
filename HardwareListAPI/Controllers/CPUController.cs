using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HardwareListAPI.DBContexts;
using HardwareListAPI.Models;

namespace HardwareListAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CPUController : ControllerBase
    {
        private readonly HardwareDBContext _context;

        public CPUController(HardwareDBContext context)
        {
            _context = context;
        }

        // GET: api/CPU
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CPU>>> GetCPUs()
        {
            return await _context.CPUs.ToListAsync();
        }

        // GET: api/CPU/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CPU>> GetCPU(int id)
        {
            var cPU = await _context.CPUs.FindAsync(id);

            if (cPU == null)
            {
                return NotFound();
            }

            return cPU;
        }

        // PUT: api/CPU/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCPU(int id, CPU cPU)
        {
            if (id != cPU.Id)
            {
                return BadRequest();
            }

            _context.Entry(cPU).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CPUExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CPU
        [HttpPost]
        public async Task<ActionResult<CPU>> PostCPU(CPU cPU)
        {
            _context.CPUs.Add(cPU);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCPU", new { id = cPU.Id }, cPU);
        }

        // DELETE: api/CPU/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CPU>> DeleteCPU(int id)
        {
            var cPU = await _context.CPUs.FindAsync(id);
            if (cPU == null)
            {
                return NotFound();
            }

            _context.CPUs.Remove(cPU);
            await _context.SaveChangesAsync();

            return cPU;
        }

        private bool CPUExists(int id)
        {
            return _context.CPUs.Any(e => e.Id == id);
        }
    }
}
