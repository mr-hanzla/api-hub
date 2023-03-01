from flask import Blueprint, render_template

bp = Blueprint('tax_info', __name__, url_prefix='/tax-info')

@bp.route('/')
def index():
    return render_template('tax-info/index.html')

