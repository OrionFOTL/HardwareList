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
    public class HDDController : ControllerBase
    {
        private readonly HardwareDBContext _context;

        public HDDController(HardwareDBContext context)
        {
            _context = context;
        }

        // GET: api/HDD
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HDD>>> GetHDDs()
        {
            return await _context.HDDs.ToListAsync();
        }

        // GET: api/HDD/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HDD>> GetHDD(int id)
        {
            var hDD = await _context.HDDs.FindAsync(id);

            if (hDD == null)
            {
                return NotFound();
            }

            return hDD;
        }

        // PUT: api/HDD/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHDD(int id, HDD hDD)
        {
            if (id != hDD.Id)
            {
                return BadRequest();
            }

            _context.Entry(hDD).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HDDExists(id))
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

        // POST: api/HDD
        [HttpPost]
        public async Task<ActionResult<HDD>> PostHDD(HDD hDD)
        {
            _context.HDDs.Add(hDD);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHDD", new { id = hDD.Id }, hDD);
        }

        // DELETE: api/HDD/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<HDD>> DeleteHDD(int id)
        {
            var hDD = await _context.HDDs.FindAsync(id);
            if (hDD == null)
            {
                return NotFound();
            }

            _context.HDDs.Remove(hDD);
            await _context.SaveChangesAsync();

            return hDD;
        }

        private bool HDDExists(int id)
        {
            return _context.HDDs.Any(e => e.Id == id);
        }
    }
}
