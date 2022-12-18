<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class ParsePizzas extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'parse:pizza';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Команда берет моковые данные со сторонней апишки и парсит их в БД';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
        $response = Http::get('https://635a4e3638725a1746c29644.mockapi.io/items');
        if ($response->successful()) {
            $pizza = $response->json();
            return Command::SUCCESS;
        }
        return Command::FAILURE;
    }
}
