from flask import Blueprint

bp = Blueprint('tax_info', __name__, url_prefix='/tax-info')

@bp.route('/')
def index():
    return 'TAX-INFO OK'
