import pygame
import random
import sys

# Инициализация Pygame
pygame.init()

# Конфигурация экрана
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Процедурная генерация персонажа")

# Цветовая палитра
SKIN_TONES = [(255, 223, 196), (234, 192, 150), (214, 160, 112)]
HAIR_COLORS = [(0, 0, 0), (139, 69, 19), (255, 165, 0), (165, 42, 42)]
CLOTHES_COLORS = [(255, 0, 0), (0, 0, 255), (0, 128, 0), (128, 0, 128)]

def draw_head(surface, x, y, size, skin_color):
    """Рисует голову"""
    pygame.draw.circle(surface, skin_color, (x, y), size)

def draw_eyes(surface, x, y, head_size):
    """Рисует глаза"""
    eye_size = head_size // 5
    pygame.draw.circle(surface, (0, 0, 0), (x - head_size // 3, y - head_size // 4), eye_size)
    pygame.draw.circle(surface, (0, 0, 0), (x + head_size // 3, y - head_size // 4), eye_size)

def draw_mouth(surface, x, y, head_size):
    """Рисует рот"""
    mouth_width = head_size // 2
    mouth_height = head_size // 6
    pygame.draw.ellipse(surface, (255, 0, 0), (x - mouth_width // 2, y + head_size // 3, mouth_width, mouth_height))

def draw_hair(surface, x, y, head_size, hair_color):
    """Рисует волосы"""
    hair_height = head_size // 2
    pygame.draw.rect(surface, hair_color, (x - head_size, y - head_size - hair_height, head_size * 2, hair_height))

def draw_body(surface, x, y, head_size, clothes_color):
    """Рисует туловище"""
    body_width = head_size
    body_height = head_size * 1.5
    pygame.draw.rect(surface, clothes_color, (x - body_width // 2, y + head_size, body_width, body_height))

def draw_arms(surface, x, y, head_size, skin_color):
    """Рисует руки"""
    arm_width = head_size // 2
    arm_height = head_size * 1.2
    pygame.draw.rect(surface, skin_color, (x - head_size - arm_width, y + head_size, arm_width, arm_height))
    pygame.draw.rect(surface, skin_color, (x + head_size, y + head_size, arm_width, arm_height))

def draw_legs(surface, x, y, head_size, clothes_color):
    """Рисует ноги"""
    leg_width = head_size // 2
    leg_height = head_size * 1.5
    pygame.draw.rect(surface, clothes_color, (x - head_size // 2, y + head_size * 2.5, leg_width, leg_height))
    pygame.draw.rect(surface, clothes_color, (x + head_size // 2 - leg_width, y + head_size * 2.5, leg_width, leg_height))

def generate_character():
    """Генерирует случайного персонажа"""
    screen.fill((255, 255, 255))  # Белый фон

    # Случайные параметры
    skin_color = random.choice(SKIN_TONES)
    hair_color = random.choice(HAIR_COLORS)
    clothes_color = random.choice(CLOTHES_COLORS)
    head_size = random.randint(50, 100)
    x, y = WIDTH // 2, HEIGHT // 3

    # Отрисовка персонажа
    draw_hair(screen, x, y, head_size, hair_color)
    draw_head(screen, x, y, head_size, skin_color)
    draw_eyes(screen, x, y, head_size)
    draw_mouth(screen, x, y, head_size)
    draw_body(screen, x, y, head_size, clothes_color)
    draw_arms(screen, x, y, head_size, skin_color)
    draw_legs(screen, x, y, head_size, clothes_color)

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
                generate_character()

    generate_character()

pygame.quit()
sys.exit()
