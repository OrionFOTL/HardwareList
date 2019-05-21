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
    public class GPUController : ControllerBase
    {
        private readonly HardwareDBContext _context;

        public GPUController(HardwareDBContext context)
        {
            _context = context;
        }

        // GET: api/GPU
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GPU>>> GetGPUs()
        {
            return await _context.GPUs.ToListAsync();
        }

        // GET: api/GPU/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GPU>> GetGPU(int id)
        {
            var gPU = await _context.GPUs.FindAsync(id);

            if (gPU == null)
            {
                return NotFound();
            }

            return gPU;
        }

        // PUT: api/GPU/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGPU(int id, GPU gPU)
        {
            if (id != gPU.Id)
            {
                return BadRequest();
            }

            _context.Entry(gPU).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GPUExists(id))
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

        // POST: api/GPU
        [HttpPost]
        public async Task<ActionResult<GPU>> PostGPU(GPU gPU)
        {
            _context.GPUs.Add(gPU);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGPU", new { id = gPU.Id }, gPU);
        }

        // DELETE: api/GPU/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<GPU>> DeleteGPU(int id)
        {
            var gPU = await _context.GPUs.FindAsync(id);
            if (gPU == null)
            {
                return NotFound();
            }

            _context.GPUs.Remove(gPU);
            await _context.SaveChangesAsync();

            return gPU;
        }

        private bool GPUExists(int id)
        {
            return _context.GPUs.Any(e => e.Id == id);
        }
    }
}
