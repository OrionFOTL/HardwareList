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
    public class SSDController : ControllerBase
    {
        private readonly HardwareDBContext _context;

        public SSDController(HardwareDBContext context)
        {
            _context = context;
        }

        // GET: api/SSD
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SSD>>> GetSSDs()
        {
            return await _context.SSDs.ToListAsync();
        }

        // GET: api/SSD/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SSD>> GetSSD(int id)
        {
            var sSD = await _context.SSDs.FindAsync(id);

            if (sSD == null)
            {
                return NotFound();
            }

            return sSD;
        }

        // PUT: api/SSD/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSSD(int id, SSD sSD)
        {
            if (id != sSD.Id)
            {
                return BadRequest();
            }

            _context.Entry(sSD).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SSDExists(id))
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

        // POST: api/SSD
        [HttpPost]
        public async Task<ActionResult<SSD>> PostSSD(SSD sSD)
        {
            _context.SSDs.Add(sSD);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSSD", new { id = sSD.Id }, sSD);
        }

        // DELETE: api/SSD/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SSD>> DeleteSSD(int id)
        {
            var sSD = await _context.SSDs.FindAsync(id);
            if (sSD == null)
            {
                return NotFound();
            }

            _context.SSDs.Remove(sSD);
            await _context.SaveChangesAsync();

            return sSD;
        }

        private bool SSDExists(int id)
        {
            return _context.SSDs.Any(e => e.Id == id);
        }
    }
}
