import pygame
import sys
import random

# Инициализация Pygame
pygame.init()

# Конфигурация экрана
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Анатомическая визуализация")

# Цветовая палитра
SKIN_TONES = [(255, 223, 196), (234, 192, 150), (214, 160, 112)]
BACKGROUND_COLOR = (240, 248, 255)  # Alice Blue

def draw_chest(surface, position, size):
    """Рисует схематичное изображение грудной клетки"""
    width, height = size
    x, y = position
    
    # Основная форма
    pygame.draw.ellipse(
        surface,
        random.choice(SKIN_TONES),
        (x - width//2, y - height//2, width, height),
        0
    )
    
    # Детализация теней
    shadow_color = (200, 180, 160)
    for i in range(3):
        offset = i * 5
        pygame.draw.arc(
            surface,
            shadow_color,
            (x - width//2 - offset, y - height//2, width + offset*2, height),
            3.14/2,
            3*3.14/2,
            3
        )

def generate_anatomy():
    screen.fill(BACKGROUND_COLOR)
    
    # Генерация случайных параметров
    body_width = random.randint(300, 400)
    body_height = random.randint(400, 500)
    
    # Рисование центральной части
    draw_chest(screen, (WIDTH//2, HEIGHT//2), (body_width, body_height))
    
    # Обновление экрана
    pygame.display.flip()

# Основной цикл
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE:
                generate_anatomy()

    generate_anatomy()

pygame.quit()
sys.exit()
